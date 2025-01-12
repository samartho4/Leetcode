class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();

        System.out.println("Input String: " + s); // Log the input string

        for (char c : s.toCharArray()) {
            System.out.println("Processing character: " + c); // Log the current character
            
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c); // Push the opening bracket onto the stack
                System.out.println("Pushed to stack: " + c);
            } else {
                if (stack.isEmpty()) {
                    System.out.println("Stack is empty when trying to match " + c);
                    return false; // No opening bracket to match
                }
                
                char top = stack.pop(); // Pop the top of the stack
                System.out.println("Popped from stack: " + top);
                System.out.println("Current Stack: " + stack);

                if ((c == ')' && top != '(') ||
                    (c == '}' && top != '{') ||
                    (c == ']' && top != '[')) {
                    System.out.println("Mismatch found! Expected " + top + " but got " + c);
                    return false; // Bracket mismatch
                }
            }
        }

        // Final check: If the stack is empty, all brackets are matched
        boolean isValid = stack.isEmpty();
        System.out.println("Final Stack: " + stack);
        System.out.println("Is Valid: " + isValid);
        return isValid;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        
        // Test Cases
        System.out.println("Result: " + solution.isValid("()"));        // true
        System.out.println("Result: " + solution.isValid("()[]{}"));    // true
        System.out.println("Result: " + solution.isValid("(]"));        // false
        System.out.println("Result: " + solution.isValid("([)]"));      // false
        System.out.println("Result: " + solution.isValid("{[]}"));      // true
    }
}


class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) {
            return ""; // Return empty string if the input array is empty
        }
        
        // Step 1: Log input array
        System.out.println("Input strings: " + java.util.Arrays.toString(strs));
        
        // Step 2: Sort the array (if sorting is included)
        java.util.Arrays.sort(strs);
        System.out.println("Sorted strings: " + java.util.Arrays.toString(strs));
        
        // Step 3: Take the first and last strings
        String first = strs[0];
        String last = strs[strs.length - 1];
        System.out.println("First string: " + first);
        System.out.println("Last string: " + last);
        
        // Step 4: Find the common prefix
        int i = 0;
        while (i < first.length() && i < last.length() && first.charAt(i) == last.charAt(i)) {
            System.out.println("Comparing characters: " + first.charAt(i) + " and " + last.charAt(i) + " at index " + i);
            i++;
        }
        
        // Step 5: Log why the loop exited
        if (i >= first.length() || i >= last.length()) {
            System.out.println("Reached the end of one of the strings.");
        } else if (first.charAt(i) != last.charAt(i)) {
            System.out.println("Characters do not match: " + first.charAt(i) + " and " + last.charAt(i));
        }
        
        // Step 6: Log the result
        System.out.println("Longest common prefix: " + first.substring(0, i));
        return first.substring(0, i);
    }
}
