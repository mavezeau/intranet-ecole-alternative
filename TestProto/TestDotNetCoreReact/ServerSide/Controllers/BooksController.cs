using RestApi.Models;
using RestApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace RestApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IMongoService _restApiService;

        public BooksController(IMongoService restApiService)
        {
            _restApiService = restApiService;
        }

        [HttpGet]
        public ActionResult<List<Book>> Get() =>
            _restApiService.Get();

        [HttpGet("{id:length(24)}", Name = "GetBook")]
        public ActionResult<Book> Get(string id)
        {
            var book = _restApiService.Get(id);

            if (book == null)
            {
                return NotFound();
            }

            return book;
        }

        [HttpPost]
        public ActionResult<Book> Create(Book book)
        {
            _restApiService.Create(book);

            return CreatedAtRoute("GetBook", new { id = book.Id.ToString() }, book);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Book bookIn)
        {
            var book = _restApiService.Get(id);

            if (book == null)
            {
                return NotFound();
            }

            _restApiService.Update(id, bookIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var book = _restApiService.Get(id);

            if (book == null)
            {
                return NotFound();
            }

            _restApiService.Remove(book.Id);

            return NoContent();
        }
    }
}