#include<iostream>
#include<fstream>
#include<time.h>
using  namespace std;

int main() {
    string names[] = {"Hanna","John","Daniel","Danuta","Robert","Stanislawa","Marta","Dorota","Donald"};
    string surnames[] = {"Nowak","Kowalski","Wiœniewski","D¹browski","Lewandowski","Wójcik"};
    ofstream file;
    srand(time(NULL));
    int a = rand() % 8;
    int b = a;
    int c = rand() % 40 + 18;
    file.open("pracownicy.txt");
    if(file.is_open()){
        for(int i = 0; i<10; i++){
                b = a;
            file << names[a] << " " << surnames[rand() % 5] << " " <<c << endl;
            a = rand() % 9;
            c = rand() % 40 + 18;
            while(a==b){
                a = rand() % 9;
            }
        }
        file.close();
    }
    return 0;
}
