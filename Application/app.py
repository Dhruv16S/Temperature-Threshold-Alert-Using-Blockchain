import pandas as pd
from flask import Flask, render_template, request
import matplotlib.pyplot as plt
import seaborn as sns
import io
import base64
import json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process_csv', methods=['POST'])
def process_csv():
    # Check if the request contains a file
    if 'csv_file' not in request.files:
        return "No file uploaded"

    # Get the file from the request
    file = request.files['csv_file']

    # Check if the file is uploaded and has a .csv extension
    if file and file.filename.endswith('.csv'):
        # Read the .csv file using pandas
        df = pd.read_csv(file)

        # Get the column names
        column_names = df.columns.tolist()

        # Get the user-provided month and year
        duration = request.form['duration']
        month = duration.split('-')[1]
        year = duration.split('-')[0]
        
        # Filter data based on the provided month and year
        filtered_data = df[df["Date"] >= f"01-{month}-{year}"]

        date_data = filtered_data['Date'].tolist()
        time_data = filtered_data['Time'].tolist()
        temperature_data = filtered_data['Temp 2m'].tolist()

        temp_date_data = [i[:2] for i in date_data]

        plot_data = pd.DataFrame({'Date': temp_date_data, 'Temp': temperature_data})

        plt.figure(figsize=(8, 4))
        sns.lineplot(data = plot_data, x="Date", y="Temp")
        plt.xlabel("Date")
        plt.ylabel("Temperature")
        plt.title(f"Temp vs Date at Balta Sound in {month}-{year}")
    
        # Save the plot to a file (optional) or display it directly in the HTML
        buffer = io.BytesIO()
        plt.savefig(buffer, format='png')
        buffer.seek(0)
        plot_base64 = base64.b64encode(buffer.getvalue()).decode()
        plt.close()

        date_data = [str(i)[:10] for i in date_data]
        time_data = [str(i) for i in time_data]
        temperature_data = [float(i) for i in temperature_data]
        
        # Convert the lists to JSON strings
        date_data_json = json.dumps(date_data)
        time_data_json = json.dumps(time_data)
        temperature_data_json = json.dumps(temperature_data)

        return render_template('index.html', date_data_json=date_data_json, time_data_json=time_data_json, temperature_data_json=temperature_data_json, plot_base64=plot_base64)

    else:
        return "Invalid file format. Please upload a .csv file."

if __name__ == '__main__':
    app.run(debug=True)
