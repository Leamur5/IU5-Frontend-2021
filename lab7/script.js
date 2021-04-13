const weather_url = new URL("https://api.openweathermap.org/data/2.5/weather");
const forecast_url = new URL(
    "https://api.openweathermap.org/data/2.5/forecast"
);

const params = {
    q: "Москва",
    units: "metric",
    lang: "ru",
    appid: "fa0cc65a38ebbb9b2e9708775a5d88f6",
};


function AddParamsForUrl(url, params) {
    Object.entries(params).forEach(([key, val]) => {
        url.searchParams.append(key, val);
    });
}

function ChangeWeatherBackground(str) {
    switch (str.slice(0, 2)) {
        case "01": //солнечно
            document.getElementsByClassName(
                "content"
            )[0].style.backgroundImage = "url('https://img2.goodfon.ru/wallpaper/nbig/5/26/morning-sun-luchi-polyana-utro.jpg')";
            break;
        case "02": //partially облачно
            document.getElementsByClassName(
                "content"
            )[0].style.backgroundImage = "url('https://pbs.twimg.com/media/DmDHmZmX4AAfTok.jpg:large')";
            break;
        case "03": //облачно
            document.getElementsByClassName(
                "content"
            )[0].style.backgroundImage = "url('http://s4.fotokto.ru/photo/full/282/2820602.jpg')";
            break;
        case "04": //mainly облачно
            document.getElementsByClassName(
                "content"
            )[0].style.backgroundImage = "url('https://s1.1zoom.ru/b5050/538/400201-serjio-serjik_1920x1200.jpg')";
            break;
        case "09": //дождь
            document.getElementsByClassName(
                "content"
            )[0].style.backgroundImage = "url('https://stihi.ru/pics/2020/09/18/790.jpg')";
            break;
        case "10": //дождь
            document.getElementsByClassName(
                "content"
            )[0].style.backgroundImage = "url('https://livelyplanet.ru/uploads/posts/2015-09/1441648969_elitefon.ru_5006.jpg')";
            break;
        case "11": //гроза
            document.getElementsByClassName(
                "content"
            )[0].style.backgroundImage = "url('https://cdn.hipwallpaper.com/i/43/14/KznGh7.jpg')";
            break;
        case "13": //снег
            document.getElementsByClassName(
                "content"
            )[0].style.backgroundImage = "url('https://w-dog.ru/wallpapers/1/51/320861618196064/zhivotnye-sneg-zima-kot.jpg')";
            break;
        case "50": //туман
            document.getElementsByClassName(
                "content"
            )[0].style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/11/19/15/44/autumn-1839969_1280.jpg')";
            break;
        default:
            document.getElementsByClassName(
                "content"
            )[0].style.backgroundImage = "url('https://puzzleit.ru/files/puzzles/220/219718/_original.jpg')";
            break;
    }
}

function temperature(num) {
    return num > 0 ? `+${Math.round(num)}` : `${Math.round(num)}`;
}

function FillCurrentWeather(data) {
    ChangeWeatherBackground(data.weather[0].icon);
    document.getElementsByClassName("content_main_h1")[0].innerHTML = `Погода в городе ${data.name}`;
    document.getElementById("current_temp").innerHTML = temperature(data.main.temp);
    document.getElementById("temp_info_img").innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"} />`;
    let condition_str = `${data.weather[0].description}`;
    document.getElementById("current_condition").innerHTML = condition_str[0].toUpperCase() + condition_str.slice(1);
    document.getElementById("wind_info").innerHTML = `${data.wind.speed} м/с`;
    document.getElementById("humidity_info").innerHTML = `${data.main.humidity}%`;
    document.getElementById("pressure_info").innerHTML = `${Math.round(data.main.pressure / 1.33322)} мм рт. ст.`;
}

function FillForecast(data) {
    for (let i = 0; i < 3; i++) {
        document.getElementsByClassName("cast_weather_date")[i].innerHTML = data.list[i].dt_txt;
        document.getElementsByClassName("block_weather_temp")[i].innerHTML = temperature(data.list[i].main.temp);
        document.getElementsByClassName("block_weather_img")[i].innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png"} />`;
        document.getElementsByClassName("block_weather_condition")[i].innerHTML = data.list[i].weather[0].description[0].toUpperCase() + data.list[i].weather[0].description.slice(1);

    }
}

async function GetData(url) {
    return fetch(url)
        .then((response) => response.json())
}

function ErrorHappened(err) {
    document.getElementsByClassName("content")[0].innerHTML = '<h1 class="content_main_h1">Погода в городе Москва</h1>';
    document.getElementsByClassName("content_main_h1")[0].innerHTML = "Город не найден";
    document.getElementsByClassName("content")[0].style.backgroundImage = "url('https://i.ytimg.com/vi/X5oGiXvIhxo/maxresdefault.jpg')";
}

function FillContent() {
    document.getElementsByClassName("content")[0].innerHTML = `
            <div class="content_main_info">
                <h1 class="content_main_h1">Погода в городе Москва</h1>
                <div class="content_temperature_info">
                    <span id="current_temp">+5</span>
                    <div id="temp_info_img"></div>
                    <span id="current_condition">Ясно</span>
                </div>
                <div class="content_additional_info">
                    <div class="content_additional_info_block">
                    <img src="http://cdn.onlinewebfonts.com/svg/download_418661.png" alt="wind" class="add_info_img">
                    <span id="wind_info">4м/с</span></div>
                    <div class="content_additional_info_block">
                    <img src="https://i7.uihere.com/icons/182/779/608/air-humidity-6bb208d98d67634b449c5dbcf2007eec.png" alt="humidity" class="add_info_img_humidity">
                    <span id="humidity_info">45%</span></div>
                    <div class="content_additional_info_block">
                    <img src="https://svgsilh.com/png-1024/1294818.png" alt="pressure" class="add_info_img">
                    <span id="pressure_info">767мм рт. ст.</span></div>
                </div>
            </div>
            <div class="content_time_blocks">
                <div class="content_block_cast" id="cast_0">
                    <div class="cast_weather_date"><span>2021-04-09 21:00:00</span></div>
                    <div class="cast_block_temp">
                        <span class="block_weather_temp">+4</span>
                        <div class="block_weather_img"></div>
                    </div>
                    <div class="block_weather_condition"><span>Ясно</span></div>
                </div>
                <div class="content_block_cast" id="cast_1">
                    <div class="cast_weather_date"><span>2021-04-10 00:00:00</span></div>
                    <div class="cast_block_temp">
                        <span class="block_weather_temp">+2</span>
                        <div class="block_weather_img"></div>
                    </div>
                    <div class="block_weather_condition"><span>Ясно</span></div>
                </div>
                <div class="content_block_cast" id="cast_2">
                    <div class="cast_weather_date"><span>2021-04-10 03:00:00</span></div>
                    <div class="cast_block_temp">
                        <span class="block_weather_temp">+1</span>
                        <div class="block_weather_img"></div>
                    </div>
                    <div class="block_weather_condition"><span>Ясно</span></div>
                </div>
            </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
    FillContent();
    AddParamsForUrl(weather_url, params);
    AddParamsForUrl(forecast_url, params);
    GetData(weather_url).then((data) => {
        FillCurrentWeather(data);
    });
    GetData(forecast_url)
        .then((data) => {
            FillForecast(data);
        })
        .catch((err) => {
            ErrorHappened();
        });
});

function FindCity() {
    FillContent();
    let city = document.getElementById("header_input_city_search").value;
    if (city === "") city = "Москва";
    weather_url.searchParams.delete("q");
    weather_url.searchParams.append("q", city);
    forecast_url.searchParams.delete("q");
    forecast_url.searchParams.append("q", city);

    GetData(weather_url)
        .then((data) => {
            FillCurrentWeather(data);
        })
        .catch((err) => {
            ErrorHappened(err);
            return;
        });
    GetData(forecast_url).then((data) => {
        FillForecast(data);
    });
}

document.getElementById("header_search_button").addEventListener("click", () => {
    FindCity();
});


document.getElementById("header_input_city_search").addEventListener("keydown", (e) => {
    if (e.code === "Enter")
        FindCity();
});