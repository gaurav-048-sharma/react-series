import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/gaurav-048-sharma')
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
    })
  return (
    <div>
        <h1>Github User Information</h1>
        <img src={data.avatar_url} alt="" />
        <h2>name : {data.name}</h2>
        <h2>login : {data.login}</h2>
        <h2>id : {data.id}</h2>
        <h2>node_id : {data.node_id}</h2>
        <h2>avatar_url : {data.avatar_url}</h2>
        <h2>gravatar_id : {data.gravatar_id}</h2>
        <h2>url : {data.url}</h2>
        <h2>html_url : {data.html_url}</h2>
        <h2>followers_url : {data.followers_url}</h2>
        <h2>following_url : {data.following_url}</h2>
        <h2>gists_url : {data.gists_url}</h2>
        <h2>starred_url : {data.starred_url}</h2>
        <h2>subscriptions_url : {data.subscriptions_url}</h2>
        <h2>organizations_url : {data.organizations_url}</h2>
        <h2>repos_url : {data.repos_url}</h2>
        <h2>events_url : {data.events_url}</h2>
        <h2>received_events_url : {data.received_events_url}</h2>
        <h2>type : {data.type}</h2>
        <h2>site_admin : {data.site_admin ? 'true' : 'false'}</h2>
        <h2>bio : {data.bio}</h2>
        <h2>twitter_username : {data.twitter_username}</h2>
        <h2>public_repos : {data.public_repos}</h2>
        <h2>public_gists : {data.public_gists}</h2>
        <h2>followers : {data.followers}</h2>
        <h2>following : {data.following}</h2>
        <h2>created_at : {data.created_at}</h2>
        <h2>updated_at : {data.updated_at}</h2>
        <h2>location : {data.location}</h2>
        <h2>company : {data.company}</h2>
        <h2>email : {data.email}</h2>
        <h2>hireable : {data.hireable ? 'true' : 'false'}</h2>
        <h2>blog : {data.blog}</h2>
        <h2>public_gists : {data.public_gists}</h2>
        <h2>public_repos : {data.public_repos}</h2>
        <h2>total_private_repos : {data.total_private_repos}</h2>
        <h2>owned_private_repos : {data.owned_private_repos}</h2>
        <h2>disk_usage : {data.disk_usage}</h2>
        <h2>collaborators : {data.collaborators}</h2>
        <h2>two_factor_authentication : {data.two_factor_authentication ? 'true' : 'false'}</h2>
        <h2>plan : {data.plan ? JSON.stringify(data.plan) : 'N/A'}</h2>
        <h2>hireable : {data.hireable ? 'true' : 'false'}</h2>
        <h2>private_gists : {data.private_gists}</h2>
        <h2>total_private_repos : {data.total_private_repos}</h2>
        <h2>owned_private_repos : {data.owned_private_repos}</h2>

        <h2>disk_usage : {data.disk_usage}</h2>
        <h2>collaborators : {data.collaborators}</h2>
        <h2>two_factor_authentication : {data.two_factor_authentication ? 'true' : 'false'}</h2>
        <h2>plan : {data.plan ? JSON.stringify(data.plan) : 'N/A'}</h2>
        <h2>hireable : {data.hireable ? 'true' : 'false'}</h2>
        <h2>private_gists : {data.private_gists}</h2>
        <h2>total_private_repos : {data.total_private_repos}</h2>
        <h2>owned_private_repos : {data.owned_private_repos}</h2>
        <h2>disk_usage : {data.disk_usage}</h2>
        <h2>collaborators : {data.collaborators}</h2>
        <h2>two_factor_authentication : {data.two_factor_authentication ? 'true' : 'false'}</h2>
        <h2>plan : {data.plan ? JSON.stringify(data.plan) : 'N/A'}</h2>
        <h2>hireable : {data.hireable ? 'true' : 'false'}</h2>
        <h2>private_gists : {data.private_gists}</h2>
        <h2>total_private_repos : {data.total_private_repos}</h2>
        <h2>owned_private_repos : {data.owned_private_repos}</h2>
        <h2>disk_usage : {data.disk_usage}</h2>
        <h2>collaborators : {data.collaborators}</h2>
        <h2>two_factor_authentication : {data.two_factor_authentication ? 'true' : 'false'}</h2>
        <h2>plan : {data.plan ? JSON.stringify(data.plan) : 'N/A'}</h2>
        <h2>hireable : {data.hireable ? 'true' : 'false'}</h2>
        <h2>private_gists : {data.private_gists}</h2>
        <h2>total_private_repos : {data.total_private_repos}</h2>
        <h2>owned_private_repos : {data.owned_private_repos}</h2>
        <h2>disk_usage : {data.disk_usage}</h2>
        <h2>collaborators : {data.collaborators}</h2>
        <h2>two_factor_authentication : {data.two_factor_authentication ? 'true' : 'false'}</h2>
        <h2>plan : {data.plan ? JSON.stringify(data.plan) : 'N/A'}</h2>
        
    </div>
  )
}

export default Github
