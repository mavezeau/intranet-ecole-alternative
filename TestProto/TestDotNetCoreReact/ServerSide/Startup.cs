using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using RestApi.Models;
using RestApi.Services;
using MongoDB.Driver;

namespace RestApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddScoped<IMongoService,MongoService>();
            var mongoClient = this.ConnectionMongo();
            var database = mongoClient.GetDatabase("BookstoreDb");
            services.AddScoped<IMongoDatabase>(_ => database);

            services.AddControllers();
        }

        private MongoClient ConnectionMongo()
        {
            var username =  Environment.GetEnvironmentVariable("MONGO_INITDB_USERNAME");
            var password = Environment.GetEnvironmentVariable("MONGO_INITDB_PASSWORD");
            var database_name = Environment.GetEnvironmentVariable("MONGO_INITDB_DATABASE"); 
            var mongoClient = new MongoClient($"mongodb://{username}:{password}@mongodb:27017/{database_name}");
            return mongoClient;
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

    }
}
    
