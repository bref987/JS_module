function total_seconds_amount() {
    let now = new Date();
    let seconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
    return seconds;
}

total_seconds_amount();
