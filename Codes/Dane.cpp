#include <iostream>
#include <fstream>
#include <time.h>
#include <cmath>
#include <iomanip>

int main() {
    std::ofstream file;
    std::srand(time(NULL));
    float a = (float)(std::rand() % 40 + 1);
    float b = (float)(std::rand() % 40 + 1);
    double c = (double)(std::rand() % 40 + 1);
    int d = std::rand() % 3 + 0;

    file.open("Dane.txt");
    file << std::setprecision(12) << a << " " << b << " " << c << std::endl;
    for(int i = 0; i<50; i++){
        if(d==1 || d==2){
            a = (float)(std::rand() % 40 + 1);
            b = (float)(std::rand() % 40 + 1);
            c = (double)std::sqrt((double)(a*a+b*b));
            file << a << " " << b << " " << c << std::endl;
        } else {
            a = (float)(std::rand() % 40 + 1);
            b = (float)(std::rand() % 40 + 1);
            c = (double)(std::rand() % 40 + 1);
            file << a << " " << b << " " << c << std::endl;
        }
        d = std::rand() % 3 + 0;
    }
    file.close();

    return 0;
}
