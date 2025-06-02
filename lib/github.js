const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_USERNAME = 'CaioEvaristo';

export async function getGitHubStats() {
    try {
        console.log('Iniciando busca de dados do GitHub...');
        
        // Busca informações do usuário
        const userResponse = await fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}`);
        if (!userResponse.ok) {
            throw new Error(`Erro ao buscar usuário: ${userResponse.status}`);
        }
        const userData = await userResponse.json();
        console.log('Dados do usuário:', userData);

        // Busca os repositórios do usuário
        const reposResponse = await fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos`);
        if (!reposResponse.ok) {
            throw new Error(`Erro ao buscar repositórios: ${reposResponse.status}`);
        }
        const reposData = await reposResponse.json();
        console.log('Número de repositórios:', reposData.length);

        // Busca os commits de cada repositório
        let totalCommits = 0;
        for (const repo of reposData) {
            console.log(`Buscando commits do repositório: ${repo.name}`);
            const commitsResponse = await fetch(`${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repo.name}/commits`);
            if (!commitsResponse.ok) {
                console.warn(`Erro ao buscar commits do repositório ${repo.name}: ${commitsResponse.status}`);
                continue;
            }
            const commitsData = await commitsResponse.json();
            totalCommits += commitsData.length;
            console.log(`Commits em ${repo.name}: ${commitsData.length}`);
        }

        const stats = {
            publicRepos: userData.public_repos,
            totalCommits,
            followers: userData.followers,
            following: userData.following
        };

        console.log('Estatísticas finais:', stats);
        return stats;
    } catch (error) {
        console.error('Erro ao buscar dados do GitHub:', error);
        return {
            publicRepos: 0,
            totalCommits: 0,
            followers: 0,
            following: 0
        };
    }
} 