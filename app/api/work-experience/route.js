// app/api/work-experience/route.js
import { mongooseConnect, WorkExperienceModel } from '@/lib/dbUtils';

export async function GET() {
  try {
    await mongooseConnect();
    const workExperiences = await WorkExperienceModel.find();
    return new Response(JSON.stringify(workExperiences), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('GET error:', err);
    return new Response(JSON.stringify({ message: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(request) {
  try {
    await mongooseConnect();
    const body = await request.json();

    const newExperience = new WorkExperienceModel(body);
    await newExperience.save();

    return new Response(
      JSON.stringify({ message: `Work Experience: ${newExperience.title} Created` }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    console.error('POST error:', err);
    return new Response(JSON.stringify({ message: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
