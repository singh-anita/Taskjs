function reverse(str) {
    var o = "";
    for (var i = 0; i <= str.length; i++)
    {
    o    += str.charAt(str.length - i)
    }
    return o;
}
console.log(reverse("anita"));