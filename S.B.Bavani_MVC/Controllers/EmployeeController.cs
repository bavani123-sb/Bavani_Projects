using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using S.B.Bavani_MVC.Models;



namespace S.B.Bavani_MVC.Controllers
{
    public class EmployeeController : Controller
    {
        public IActionResult EmployeeForm()
        {
            return View();
        }
        [HttpGet]
        [Route("employee/get")]
        public JsonResult Form( EmployeeInfo inputData, string firstName, string lastName, string userName, string email, string password)
        {
            if (inputData != null &&
                (inputData.FirstName == firstName && inputData.LastName == lastName && inputData.UserName == userName && inputData.Password == password && inputData.Email == email))
            {
                return Json(new
                {
                    success = true,
                    message = "Employee added successfully"
                });
            }

            return Json(new
            {
                success = false,
                message = "Failed."
            });
        }

        public IActionResult EmployeeList()
        {
            var employees = new List<EmployeeInfo>
            {
                new EmployeeInfo { FirstName="Bavani", LastName="S", UserName="bavani", Password="1234", Email="bavani@gmail.com" }
            };

            return View(employees);
        }
    }
}
