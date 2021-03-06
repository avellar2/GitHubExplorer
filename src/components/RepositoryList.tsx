import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useEffect, useState } from "react";

interface Repository {
    name: string,
    description: string,
    html_url: string
}

export const RepositoryList = () => {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch("https://api.github.com/orgs/rocketseat/repos")
            .then((response) => response.json())
            .then((data) => setRepositories(data));
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            {repositories.map((repository) => {
                return (
                    <RepositoryItem
                        key={repository.name}
                        repository={repository}
                    />
                );
            })}
        </section>
    );
};
