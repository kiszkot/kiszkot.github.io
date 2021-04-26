#include<iostream>
#include<exception>

int main() {
    float a,b=0;
    int c=0;
    std::cin.exceptions(std::istream::failbit | std::istream::badbit);
    std::ios_base::iostate oldExceptionBits = std::cin.exceptions();
    while(true){
            try
            {
                std::cout << "podaj liczbe lub -1 aby dokonczyc" << std::endl;
                std::cin >> a;
                if(a==-1)
                {
                    break;
                } else if(a>=1 && a<=6)
                {
                    b += a;
                    c++;
                } else
                {
                    while(a>6 || a<1)
                    {
                        std::cout << "podana wartoœæ musi byæ liczb¹ wiêksza od 0 i mniejsza od 7" << std::endl;
                        std::cin >> a;
                    }
                    b += a;
                    c++;
                }
            }
            catch(const std::istream::failure &failure)
            {
                std::cin.exceptions(oldExceptionBits);
                std::cout << "podana wartoœæ musi byæ liczb¹" << std::endl;
                a = 0;
            }
    }
    a = (float)b/c;
    std::cout << "srednia : " << a << std::endl;
    return 0;
}
