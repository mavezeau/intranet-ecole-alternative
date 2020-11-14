using System.Collections.Generic;
using System.Threading.Tasks;
using RestApi.Models;
using MongoDB.Driver;

namespace RestApi.Services
{
    public class MongoService : IMongoService
    {        
        private readonly IMongoDatabase _database;
        private readonly IMongoCollection<Book> _books;

        public MongoService(IMongoDatabase database)
        {
            _database = database;
            _books = _database.GetCollection<Book>("BookstoreDb");
        }

        public async Task<IEnumerable<Book>> GetBooksAsync()
        {

            var books = await _books
                .AsQueryable()
                .ToListAsync();
            
            return books;
        }
        public List<Book> Get() =>
            _books.Find(book => true).ToList();

        public Book Get(string id) =>
            _books.Find<Book>(book => book.Id == id).FirstOrDefault();

        public Book Create(Book book)
        {
            _books.InsertOne(book);
            return book;
        }

        public void Update(string id, Book bookIn) =>
            _books.ReplaceOne(book => book.Id == id, bookIn);

        public void Remove(Book bookIn) =>
            _books.DeleteOne(book => book.Id == bookIn.Id);

        public void Remove(string id) => 
            _books.DeleteOne(book => book.Id == id);
  }
}