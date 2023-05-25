import GitHubButton from 'react-github-btn';

export default function Footer() {
  return (
    <>
      <GitHubButton
        href='https://github.com/FrancoCanzani/pomodoro-app'
        data-color-scheme='no-preference: dark; light: light; dark: dark;'
        data-size='large'
        aria-label='Star FrancoCanzani/pomodoro-app on GitHub'
      >
        Star
      </GitHubButton>
    </>
  );
}
