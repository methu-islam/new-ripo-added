function calculateTriangleArea() {
    const triangleBaseIput = document.getElementById('triangle-base')
    const triangleBaseText = triangleBaseIput.value;
    const base = parseFloat(triangleBaseText);
    console.log(base);

    const triangleHeightInput = document.getElementById('trialgile-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height)

    const area = 0.5 * base * height;
     console.log('area of the tringle is:', area);


    //  display triangle area 
    const trialgileArea = document.getElementById('trialgile-area');
    trialgileArea.innerText = area;
}



