function valueJS()
{
    var b = document.getElementById('name').value;
    console.log(b);
    document.getElementById('lblMessage').innerHTML = b + ' ' + 'thank you for contacting me. I will get back to you soon.';
    console.log(b);
}