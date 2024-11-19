interface Props {
  code: string;
  description: string;
}

export const getPrompt = ({ code, description }: Props) => {
  return `Generate 1 detailed documentation for explaining the provided React code
  ### Requirements 
  1. Target audience : Frontend Developers 
  2. Language : Korean 
  3. Documentation Format: 
    - Title: Brief title for the code 
    - Purpose: Explain what this code is meant to achieve
    - Brief Description : Summarize how the code works, including key details
    - Warnings: If code has warning, Highlight potential issues, limitations, or things to watch out for 
  
  ### Input
  1. Description : ${description}
  2. Code: ${code}

  ### Output 
  following this markdown format : 

  # 제목
  [Insert Title Here]
  ## 목적 
  [Insert Purpose Here]
  ## 설명 
  [Insert Brief Description Here]
  ## 주의점
  [Insert warnings Here]
  `;
};
