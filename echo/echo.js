// echo.js — example integration

export const manifest = {
  name: 'Echo',
  version: '1.0.0',
  description: 'Echoes back whatever you send it',
  author: 'sinceohsix',
  icon: 'https://raw.githubusercontent.com/operatorjs/integrations/refs/heads/main/echo/echo.png',
  alias: ['e'],
  config: [
    { key: 'prefix', type: 'text' },
  ],
};

export async function run(args, send, host) {
  const text = args.trim();
  const config = host.getConfig('echo');
  const prefix = config.prefix || 'You said:';

  send({
    type: 'message',
    parts: [{ text: text ? `${prefix} ${text}` : 'say something and I\'ll echo it back.' }],
  });
}
