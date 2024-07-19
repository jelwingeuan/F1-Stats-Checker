from flask import Flask, render_template, request
import requests

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/check", methods=["POST"])
def check():
    driver_name = request.form["driver_name"]
    stats = get_driver_stats(driver_name)
    return render_template("result.html", stats=stats)


def get_driver_stats(driver_name):
    url = f"http://ergast.com/api/f1/drivers/{driver_name}.json"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return data
    else:
        return {"error": "Driver not found"}


if __name__ == "__main__":
    app.run(debug=True)
