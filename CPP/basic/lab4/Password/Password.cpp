#include <iostream>
#include <string>


using std::cin;
using std::cout;
using std::string;
using std::endl;

int main()
{
    string username;
    string passord;
    string input = "";
    cin >> username >> passord >> input;

    while (true)
    {
        if (input.compare(passord) == 0) {
            cout << "Welcome " << username + "!";
            break;
        }
        cin >> input;

    }
}