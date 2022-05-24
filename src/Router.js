import React, { Component, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { AddTeam } from './AddTeam'
import { AddPlayer } from './AddPlayer'
import { AddMatch } from './AddMatch'
import { TeamsList } from './TeamsList'
import { AddTeamsToMatch } from './AddTeamsToMatch'
import { MatchesList } from './MatchesList'
const routes = [
    {
        route: '/addTeam',
        component: <AddTeam />,
        text: 'Add Team',
    },
    {
        route: '/addPlayer',
        component: <AddPlayer />,
        text: 'Add Player',
    },
    {
        route: '/addMatch',
        component: <AddMatch />,
        text: 'Add Match',
    },
    {
        route: '/addTeamsToMatch',
        component: <AddTeamsToMatch />,
        text: 'Add Teams To Match',
    },
    {
        route: '/getTeamWithPlayers',
        component: <TeamsList />,
        text: 'List Teams',
    },
    {
        route: '/getMatchWithTeams',
        component: <MatchesList />,
        text: 'List Matches',
    },
]

export var NavBar = () => {
    var [currentPage, setCurrentPage] = useState('addTeam')
    var routesByRole = (roleRoutes) =>
        roleRoutes.map((route) => (
            <Link
                to={route.route}
                className={
                    (currentPage === route.route ? 'nav-item-active ' : '') +
                    'nav-item nav-link nav-item-route'
                }
                key={route.route}
                onClick={() => setCurrentPage(route.route)}
            >
                <span>{route.text}</span>
            </Link>
        ))

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light pe-5 ps-5 d-flex justify-content-center mt-5">
                {routesByRole(routes)}
            </nav>
        </>
    )
}

export default class Router extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        {routes.map((route) => {
                            return (
                                <Route
                                    key={route.route}
                                    path={route.route}
                                    element={route.component}
                                />
                            )
                        })}
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}
