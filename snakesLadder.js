/**
 * Design snakes and ladder
 * Data Structure : Linked List
 * Every node has two pointers: next and jump.
 * If node->next doesn’t contain a ladder or snake then node->jump = node->next->next
 * else node->jump = NULL
 * How many minimum number of jumps are required to reach the end of the snakes and ladder game?
 * Answered using Dynamic Programming
 *
 */