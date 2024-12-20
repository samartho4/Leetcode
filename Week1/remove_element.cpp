#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int k = 0; // Pointer to store valid elements
        
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] != val) { // If the current element is not equal to val
                nums[k] = nums[i]; // Move the element to the 'k' position
                k++; // Increment k
            }
        }
        
        return k; // Return the count of valid elements
    }
};

int main() {
    Solution solution; // Create an instance of Solution
    
    // Example Input
    vector<int> nums; // Declare the vector
    nums.push_back(3);
    nums.push_back(2);
    nums.push_back(2);
    nums.push_back(3);
    int val = 3;

    // Call the function
    int k = solution.removeElement(nums, val);
    
    // Output the result
    cout << "The number of elements not equal to " << val << " is: " << k << endl;
    cout << "Modified nums: [";
    for (int i = 0; i < k; i++) {
        cout << nums[i] << (i < k - 1 ? ", " : "");
    }
    cout << "]" << endl;
    
    return 0;
}
