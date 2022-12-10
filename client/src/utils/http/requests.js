
const API_URL = 'https://localhost:8000/v1'

async function httpGetSession() {
    const response = await fetch(`${API_URL}/auth/get-session`)
    return await response.json();
}

async function httpSignOutUser() {
    const response = await fetch(`${API_URL}/auth/logout`)
    const jsonResponse = await response.json();
    console.log(jsonResponse)
    return jsonResponse;
}

async function httpGetCoffeeData() {
    const response = await fetch(`${API_URL}/coffee-data`)
    const coffeeDataResponse = await response.json()
    return coffeeDataResponse
}

async function httpGetFriendActivity() {
    const response = await fetch(`${API_URL}/friends-activity`)
    const friendsActivityResponse = await response.json();
    return friendsActivityResponse
}

async function httpCheckInMyCup(checkInData) {
    try {
        const response = await fetch(`${API_URL}/check-in-my-cup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(checkInData)
        })
        const newFeed = await response.json();
        return newFeed
    } catch(err) {
        console.log(err)
        return err
    }
}

async function httpAddNewCoffee(coffeeToSubmit) {
    const response = await fetch(`${API_URL}/coffee-data`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(coffeeToSubmit)
    })
    const addResponse = await response.json()
    return addResponse
}

export {
    httpGetSession,
    httpSignOutUser,
    httpGetCoffeeData,
    httpGetFriendActivity,
    httpCheckInMyCup,
    httpAddNewCoffee
}