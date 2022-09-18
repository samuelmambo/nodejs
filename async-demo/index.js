console.log('Before');
getUser(1, getRepositoties);
console.log('After');
function getRepositoties(user){
    getRepositoties(user.gitHubUsername, getRepositoties);
}
function getCommits(repo){
    getCommits(repo, displayCommits); 
}
function displayCommits(commits) {
    console.log(commits);
}
function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading user from DB.....');
        callback({ id: id, gitHubUsername: 'samuelmambo' })
    }, 2000);
}
function getRepositoties(username, callback) {
    setTimeout(() => { 
        console.log('geting repositories from Db...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 1000);

}
