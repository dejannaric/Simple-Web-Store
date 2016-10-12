namespace WebStore.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using WebStore.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<WebStore.Models.WebStoreContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(WebStore.Models.WebStoreContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            context.Categories.AddOrUpdate(p => p.Id,
                new Category() { Id = 1, Name = "Music"},
                new Category() { Id = 2, Name = "Books" },
                new Category() { Id = 3, Name = "Electronics" }
            );

            context.Products.AddOrUpdate(p => p.Id,
                new Product() { Id = 1, Name = "Knjiga kaj te briga", Description = "Brez opisaasdadas adasda", Price = 10.25M, CategoryId = 2},
                new Product() { Id = 2, Name = "Train - Drops of jupiter", Description = "Brez opisaasdadas adasda", Price = 0.995M, CategoryId = 1 },
                new Product() { Id = 3, Name = "Asus N550JV", Description = "Brez opisaasdadas adasda", Price = 1000.59M, CategoryId = 3 },
                new Product() { Id = 4, Name = "Knjiga kaj te briga 2", Description = "Brez opisaasdadas adasda", Price = 100.25M, CategoryId = 2 },
                new Product() { Id = 5, Name = "Train - Hey, Soul Sister", Description = "Brez opisaasdadas adasda", Price = 1.99M, CategoryId = 1 }                
            );
        }
    }
}
