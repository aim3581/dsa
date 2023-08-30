In SQL, an index is a database structure that provides a fast way to look up data in a table based on the values in one or more columns. Indices are used to improve the performance of query operations by allowing the database system to quickly locate the rows that match a certain condition, without having to scan the entire table.

**Why are Indices Used?**

Indices are used for the following reasons:

1. **Faster Data Retrieval:** Indices allow the database to locate rows quickly, even in large tables, by providing a direct path to the data that satisfies a query condition. This helps to minimize the amount of data that needs to be processed.

2. **Efficient Sorting and Grouping:** Indices enable the database to perform sorting and grouping operations more efficiently, improving the performance of query operations involving ORDER BY and GROUP BY clauses.

3. **Constraint Enforcement:** Unique indices enforce uniqueness constraints, ensuring that values in a specific column (or combination of columns) are unique across the table.

4. **Primary Key and Foreign Key:** The primary key of a table is automatically indexed to ensure efficient data retrieval for primary key lookups. Similarly, foreign keys are often indexed to improve performance when joining tables.

**How Indices Work?**

An index consists of a data structure that organizes the values in a column (or columns) in a way that makes data retrieval more efficient. The most common type of index is the B-tree index, which is a balanced tree structure that allows for quick logarithmic searches.

Here's how indices work:

1. **Index Creation:** When you create an index on a column or columns, the database system creates a separate data structure (the index) to store a copy of the indexed column's values along with pointers to the corresponding rows in the table.

2. **Data Organization:** The index data structure is organized in a way that allows the database to perform binary search or other efficient lookup algorithms. This structure enables the database to quickly narrow down the search to a smaller subset of rows.

3. **Index Usage:** When you execute a query that involves a condition on an indexed column, the database system uses the index to locate the relevant rows. It follows the index tree, making comparisons and traversing pointers to find the desired rows.

4. **Query Optimization:** The database optimizer evaluates query execution plans to determine the most efficient way to use the available indices. It considers factors like selectivity, cardinality, and cost to choose the best index for a given query.

It's important to note that while indices significantly improve read performance, they can slow down write operations (such as INSERT, UPDATE, and DELETE) because the index structure needs to be updated whenever the underlying data changes.

In summary, indices in SQL are crucial for optimizing query performance by providing efficient data retrieval mechanisms. They are particularly useful in speeding up SELECT statements and improving overall database efficiency.