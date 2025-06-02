"use client";

import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { getGitHubStats } from "@/lib/github";

const Stats = () => {
    const [stats, setStats] = useState([
        {
            num: 7,
            text: "Anos de experiência"
        },
        {
            num: 0,
            text: "Repositórios públicos"
        },
        {
            num: 6,
            text: "Tecnologias"
        },
        {
            num: 0,
            text: "Commits no GitHub"
        }
    ]);

    useEffect(() => {
        const fetchGitHubStats = async () => {
            const githubStats = await getGitHubStats();
            setStats(prevStats => [
                prevStats[0], // Mantém os anos de experiência
                {
                    num: githubStats.publicRepos,
                    text: "Repositórios públicos"
                },
                prevStats[2], // Mantém as tecnologias
                {
                    num: githubStats.totalCommits,
                    text: "Commits no GitHub"
                }
            ]);
        };

        fetchGitHubStats();
    }, []);

    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80px] mx-auto xl:max-w-none">
                    {stats.map((item, index) => {
                        return (
                            <div 
                                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                                key={index}
                            >
                                <CountUp 
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-extrabold"
                                />
                                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Stats;