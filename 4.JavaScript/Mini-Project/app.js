document.getElementById('div').addEventListener('click', function() {
    alert('div Button clicked!');
    event.stopPropagation();
});
document.getElementById('ul').addEventListener('click', function() {
    alert('ul Button clicked!');
    event.stopPropagation();
});

document.getElementById('li')
for(let i=0;i<li.length;i++)  
{
    li[i].addEventListener('click', function() {
    alert(' li Button clicked!');
    event.stopPropagation();
});
}