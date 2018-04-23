const but = document.getElementById('click_but');
const upcase = x => x.toUpperCase();
const add = x => x.padEnd(10, '*');
const concat = x => x + x;
const reverse = x => x.split('').reverse().join('');

but.addEventListener('click', () => {
  let input = document.getElementById('us_input').value;
  if(input.length >= 3 && input.length <= 5) {
    let res = input
     |> upcase
     |> add
     |> concat
     |> reverse;
     console.log(res);
     console.log(reverse(concat(add(upcase(input)))));
  }
});
