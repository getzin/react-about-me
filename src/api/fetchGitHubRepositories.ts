export async function fetchGitHubRepositories(username: string) {
    const response = await fetch(
        `https://api.github.com/users/${username}/repos`
    );

    const repositories = await response.json();

    return repositories;
}