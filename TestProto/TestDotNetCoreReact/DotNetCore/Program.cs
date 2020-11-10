using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

namespace RestApi
{
    public class Program
    {
      /*  public static void Main(string[] args)
        {            
            var host = Host.CreateDefaultBuilder()    
                .ConfigureWebHostDefaults(webBuilder => { 
                    webBuilder.Configure(app => { 
                        app.UseHttpsRedirection()
                            .Run(async context => {
                                await context.Response.WriteAsync("Hello remote world from ASP.NET Core!");
                            });
                    });
                });
            host.Build().Run();
        }*/
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
