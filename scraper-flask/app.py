from flask import Flask, request
from flask_cors import CORS
from modules.scraper import scraper
import json

#scraper(request.data)
app = Flask(__name__)

CORS(app)

@app.route('/', methods = ['POST'])
def result():
    return scraper(request.data)
    
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')