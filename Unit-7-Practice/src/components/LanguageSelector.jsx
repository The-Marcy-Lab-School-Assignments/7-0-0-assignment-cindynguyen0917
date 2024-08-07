import React from "react";
const LanguageSelector = ({ changeLanguage }) => {
    const languages = ['English', 'Chinese', 'Spanish', 'Haitian', 'Portuguese'];

    return (
        <div>
            {languages.map((language) => (
                <button key={language} onClick={() => changeLanguage(language)}>
                    {language}
                </button>
            ))}
        </div>
    );
};

export default LanguageSelector;