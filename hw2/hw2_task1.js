var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2  ===  c = a + 1
d = b++; alert(d);           // 1  b++ сначала присваивает b, а потом его увеличивает, поэтому d == 1 а b == 2
c = (2 + ++a); alert(c);      // 5  а изначально = 2 потом еще раз увеличивается а потом присваивается для С
d = (2 + b++); alert(d);      // 4  аналогичная ситуация второму примеру сначала присвоение, потом увеличение операнда b
alert(a);                    // 3 потому что блять
alert(b);                    // 3 потому что блять  