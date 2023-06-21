import { FC } from 'react';
import { useLanguage } from 'features/language/index';
import { StyledButton, StyledLanguage } from './language.styles';

const LanguageComponent: FC = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <StyledLanguage>
      <StyledButton onClick={() => setLanguage('SPANISH')} active={language === 'SPANISH'}>
        {t('language.spanish')}
      </StyledButton>
      <StyledButton onClick={() => setLanguage('ENGLISH')} active={language === 'ENGLISH'}>
        {t('language.english')}
      </StyledButton>
      <StyledButton onClick={() => setLanguage('PORTUGUESE')} active={language === 'PORTUGUESE'}>
        {t('language.portuguese')}
      </StyledButton>
    </StyledLanguage>
  );
};
export default LanguageComponent;
