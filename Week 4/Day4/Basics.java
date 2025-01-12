
    
class Solution{
    public int[] twoSum(int[] nums, int target){
        for(int i=0; i<nums.length;i++){
            for (int j=i+1; j<nums.length; j++){
                if (nums[i]+nums[j]==target){
                    return new int[]{i,j};
                }
            }
        }
        return new int[]{};
    }
}
class Solution {
    public boolean isPalindrome(int x) {
        if ((x != 0 && x % 10 == 0)) return false;
        int reversedHalf = 0;
        while (x > reversedHalf) {
            int digit = x % 10; 
            reversedHalf = reversedHalf * 10 + digit; 
            x /= 10; 
        }
        return x == reversedHalf || x == reversedHalf / 10;
    
    }
}
public class Solution {
    public boolean isAnagram(String s, String t) {
        // If lengths are not equal, they can't be anagrams
        if (s.length() != t.length()) {
            return false;
        }

        // Array to count frequencies of characters
        int[] count = new int[26];

        // Update counts for characters in s and t
        for (int i = 0; i < s.length(); i++) {
            count[s.charAt(i) - 'a']++;
            count[t.charAt(i) - 'a']--;
        }

        // Check if all counts are zero
        for (int c : count) {
            if (c != 0) {
                return false;
            }
        }

        return true;
    }
}
import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<String> fizzBuzz(int n) {
        // Create a list to store the result
        List<String> result = new ArrayList<>();
       
        // Loop through numbers from 1 to n
        for (int i = 1; i <= n; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                result.add("FizzBuzz"); // Divisible by both 3 and 5
            } else if (i % 3 == 0) {
                result.add("Fizz"); // Divisible by 3
            } else if (i % 5 == 0) {
                result.add("Buzz"); // Divisible by 5
            } else {
                result.add(Integer.toString(i)); // Not divisible by 3 or 5
            }
        }
        
        // Return the result list
        return result;
    }
}
