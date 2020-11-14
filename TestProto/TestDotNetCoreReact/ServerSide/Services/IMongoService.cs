  
using System.Collections.Generic;
using System.Threading.Tasks;
using RestApi.Models;

namespace RestApi.Services
{
    public interface IMongoService
    {
        Task<IEnumerable<Book>> GetBooksAsync();
        List<Book> Get();
        Book Get(string id);
        Book Create(Book book);
        void Update(string id, Book bookIn);
        void Remove(Book bookIn);
        void Remove(string id);
    }
}