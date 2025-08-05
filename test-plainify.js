// Test script to verify plainify function
import { plainify } from './src/lib/utils/textConverter.ts';

const testCases = [
  {
    input: 'This is a [link](http://example.com) with some text.',
    expected: 'This is a link with some text.'
  },
  {
    input: 'This has **bold text** and *italic text*.',
    expected: 'This has bold text and italic text.'
  },
  {
    input: 'Here is an ![image](./image.jpg) with alt text.',
    expected: 'Here is an  with alt text.'
  },
  {
    input: '## Header\nSome content with `inline code` here.',
    expected: 'Header\nSome content with inline code here.'
  },
  {
    input: 'Tom Mertens has [published information on a Case Study](http://blogs.technet.com/b/belpta/archive/2010/12/02/nrb-reduces-development-costs-by-10-with-team-foundation-server-2010.aspx) just completed with them',
    expected: 'Tom Mertens has published information on a Case Study just completed with them'
  }
];

console.log('Testing plainify function:');
testCases.forEach((test, index) => {
  const result = plainify(test.input);
  console.log(`\nTest ${index + 1}:`);
  console.log('Input:', test.input);
  console.log('Expected:', test.expected);
  console.log('Result:', result);
  console.log('Pass:', result.trim() === test.expected.trim());
});
