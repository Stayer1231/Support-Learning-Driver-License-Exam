﻿using Backend.DTO.Question;

namespace Backend.Services.Question
{
    public interface IQuestionService
    {
        ServiceResult<ICollection<QuestionDTO>> GetAllQuestion();
    }
}
