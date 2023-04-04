const encode = (message, file) => {
  const msgBits = `${message}.`
    .split('')
    .map(c => c.charCodeAt(0).toString(2).padStart(8, '0'))
    .join('');

  // console.log({ msgBits, file })

  const newFile = new Uint8Array(file);

  // console.log({ file: newFile })

  for (let i = 0; i < msgBits.length; i++) {
    const bit = msgBits[i];
    var fileByte = file[i].toString(2).padStart(8, '0')
    const newFileByte = fileByte.slice(0,7) + bit;
    // console.log({ bit, fileByte, newFileByte })
    newFile[i] = Number(newFileByte, 2)
  }

  // console.log({ newFile })

  return newFile;
}

const decode = (file) => {
  const fileChars = new Uint8Array(file);
  const msgBytes = [];
  let msgByte = ""

  // console.log({ fileChars })
  for (let i = 0; i < fileChars.length; i++) {
    char = fileChars[i];
    charByte = char.toString(2).padStart(8,'0')
    msgByte = `${msgByte}${charByte.slice(-1)}`
    // console.log({ char, charByte, msgByte })
    if (msgByte.length === 8) {
      if (msgByte === '00101110') break;
      msgBytes.push(parseInt(msgByte, 2));
      msgByte = ""
    }
    if (i > 500) break;
  }

  // console.log({msgBytes})
  return String.fromCharCode(...msgBytes)
}

module.exports = { encode, decode };
