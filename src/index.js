import memeMaker from '@erickwendel/meme-maker';

const options = {
  image: './img/sorry.jpg',         // Required
  outfile: './out/spiderman-meme.png',  // Required
  topText: 'Are you a programmer?',            // Required
  bottomText: 'Can you fix my printer?',           // Optional
}

memeMaker(options).then(_ => {
  console.log('Image saved: ' + options.outfile)
}).catch(error => console.log(error));