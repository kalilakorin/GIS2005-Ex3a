function parseSourceParams() {
    const locationStr = window.location;
    console.log("Location string: " + locationStr);

    const urlParams = new URLSearchParams(locationStr.search);
    var source = urlParams.get('source');
    console.log("Source variable: " + source);

    if (source == "CIA")
    {
        document.getElementById("usa").href="https://www.cia.gov/the-world-factbook/countries/united-states/";
    }
}