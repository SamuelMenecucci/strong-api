import feedbackModel from "../models/feedback.model.js";

async function getFeedbacks(req, res, next) {
  const results = await feedbackModel.getFeedbacks();

  return res.send(results.rows);
}

async function createFeedback(req, res, next) {
  try {
    const { ongId, feedback } = req.body;

    const result = await feedbackModel.createFeedback({ ongId, feedback });

    res.send(result);
  } catch (err) {
    next(err);
  }
}

export default { getFeedbacks, createFeedback };
