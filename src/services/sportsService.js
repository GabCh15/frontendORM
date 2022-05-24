export const addTeam = async (teamName) => {
    return await fetch('http://localhost:3002/addTeam', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            team: { name: teamName },
        }),
    }).then((json) => json.json())
}

export const addPlayer = async (player) => {
    return await fetch('http://localhost:3002/addPlayer', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            player,
        }),
    }).then((json) => json.json())
}

export const addMatch = async (matchName) => {
    return await fetch('http://localhost:3002/addMatch', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            match: { name: matchName },
        }),
    }).then((json) => json.json())
}

export const addTeamsToMatch = async (matchName,team1,team2) => {
    return await fetch('http://localhost:3002/addTeamsToMatch', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            match: matchName,
            team1,team2
        }),
    }).then((json) => json.json())
}