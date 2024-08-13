import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Technologies = () => {
  const [skills, setSkills] = useState<Technology[]>([]);

  useEffect(() => {
    async function getTechnologies() {
      const response = await fetch("./jsons/technologies.json");
      const data = await response.json();
      if (data !== null) {
        setSkills(data);
      }
    }
    getTechnologies();
  }, []);

  return (
    <SkillsList>
      {skills.map(({ id, name }) => (
        <SkillCard key={id}>{name}</SkillCard>
      ))}
    </SkillsList>
  );
};

const SkillsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: left;
  flex-wrap: wrap;
  gap: 16px;
`;

const SkillCard = styled.li`
  background-color: #ddd;
  padding: 8px 16px;
  border-radius: 8px;
  color: #555;
  font-size: 1.125rem;
  font-weight: 500;
`;

export default Technologies;
