function createMainElements() {
  const body = document.getElementsByTagName('body');
  const main = document.createElement('main');
  main.className = 'main';
  body[0].append(main);
  const title = document.createElement('h1');
  title.className = 'title';
  title.textContent = 'RSS Virtual Keyboard';
  const textArea = document.createElement('textarea');
  textArea.className = 'textarea';
  textArea.rows = '5';
  textArea.cols = '70';
  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  const os = document.createElement('p');
  const lang = document.createElement('p');
  os.className = 'description';
  os.textContent = 'The Keyboard was created in the Windows operating system';
  lang.className = 'description';
  lang.textContent = 'To switch the language combination: left ctrl + alt';
  main.append(title, textArea, keyboard, os, lang);
}

createMainElements();
