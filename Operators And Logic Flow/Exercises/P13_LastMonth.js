function lastDay(arr) {

    let resultDay = new Date(arr[2], arr[1] - 1, 0)

    return resultDay.getDate();
}
