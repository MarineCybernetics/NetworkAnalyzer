module.exports = {
    "weather": {
        "labels": [ "Time", "Temperatures"],
        "scaling": [ "time", "linear"],        
        "dataProperties": [
            {"dataParam": ["time", "day"]},
            {"dataParam": ["time", "min"]},
            {"dataParam": ["time", "max"]},
            {"dataParam": ["time", "eve"]},
            {"dataParam": ["time", "night"]},
            {"dataParam": ["time", "morn"]},
        ],
        "dateFormat": "%Y-%m-%d %H:%M:%S"
    },
    "wind": {
        "labels": [ "Time", "wind"],
        "scaling": [ "time", "linear"],        
        "dataProperties": [
            {"dataParam": ["time", "speed"]}
        ],
        "dateFormat": "%Y-%m-%d %H:%M:%S"
    },
    "humidityclouds": {
        "labels": [ "Time", "Other data"],
        "scaling": [ "time", "linear"],        
        "dataProperties": [
            {"dataParam": ["time", "humidity"]},
            {"dataParam": ["time", "clouds"]}
        ],
        "dateFormat": "%Y-%m-%d %H:%M:%S"
    }

};