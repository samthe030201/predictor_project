#api/app1.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np


app = Flask(__name__)
CORS(app)

model = pickle.load(open('xg_model.sav', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    
    features = [int(data['markets']), int(data['duration_ms']), float(data['acousticness']), 
                float(data['danceability']), float(data['energy']), float(data['instrumentalness']), float(data['liveness']), 
                float(data['loudness']), float(data['speechiness']), float(data['tempo']),float(data['valence']), 
                int(data['musicalkey']), int(data['musicalmode']), int(data['time_signature']),int(data['count'])]
    
    
    
    features_array = np.array([features], dtype=np.float32)

    
   
    prediction = model.predict(features_array)

    
    mapping = {
        0: 'Popularity of Artist and Song is between 0-20',
        1: 'Popularity of Artist and Song is between 21-40',
        2: 'Popularity of Artist and Song is between 41-60',
        3: 'Popularity of Artist and Song is between 61-80',
        4: 'Popularity of Artist and Song is between 81-100'
    }
    result = mapping[prediction[0]]
    
    return jsonify({'prediction': result})

if __name__ == '__main__':
    app.run(debug=True)
